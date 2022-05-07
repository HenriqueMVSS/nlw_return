import {MailAdapter, SendMailData} from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0c4e8ca8c9d90a",
      pass: "55149f3b0ff928"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Henrique Silva <henriquemateus1794@gmail.com>', 
        subject,
        html: body,
    })
    };
}