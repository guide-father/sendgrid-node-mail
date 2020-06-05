const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'test@gmail.com',
  from: 'Guide Father <service.b@blog.guidefather.in>',
  subject: 'Super Easy!!!',
  html: `
    <table>
        <tr>
            <td><h1>GUIDE FATHER</h1></td>
            <td>( ͡▀̿ ̿ ͜ʖ ͡▀̿ ̿ )</td>
        </tr>
        <tr>
            <a href="https://blog.guidefather.in">https://blog.guidefather.in</a>
        </tr>
    </table>
   `,
};
sgMail.send(msg).then(
    success=>{console.log(success)}
).catch(e=>console.log(e.response.body))