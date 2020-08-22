interface Request {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: {
    week_day: string;
    from: string;
    to: string;
  };
}

class CreateClassesService {
  public async execute(data: Request): Promise<void> {
    
  }
}
