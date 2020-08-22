import { Request, Response } from "express";
import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHoutToMinutes";

interface ScheduleItem {
  week_day: number;
  to: string;
  from: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response
        .status(400)
        .json({ error: "Missing filter to search classes" });
    }

    const timeInMinutes = convertHourToMinutes(filters.time as string);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    //faz com que execute todos os bds e caso de algum sucesso faça  a persistencia ou volte tudo com algum erro
    const trx = await db.transaction();

    try {
      const getUserId = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      //como o user_id pode ser uma lista, mas sabemos que nesse caso so ira criar apenas um unico usuario,
      //entao aqui estou dizer que user_id recebe o primeiro valor do array que seria na posiçao 0.
      const user_id = getUserId[0];

      const getClassesId = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = getClassesId[0];

      const classShedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classShedule);

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();
      return response
        .status(400)
        .json({ error: "Unexpected error while creating new class" });
    }
  }
}
