import { Request, Response } from "express";
import LoginService from "../services/loginService";
import httpStatusCode from "../helpers/httpStatusCode";

export default class LoginController {
  private _service;

  constructor() {
    this._service = new LoginService();
  }
  
  login = async (req: Request, res: Response) => {
      const { email, password } = req.body;
      
      const { message, token } = await this._service.login(email, password);

      if (message) return res.status(httpStatusCode.NOT_FOUND).json({ message });

      return res.status(httpStatusCode.OK).json({ token });
  }
}