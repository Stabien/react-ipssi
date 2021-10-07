export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
 export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

 /*export const validTelephone = new RegExp('^(?:\+|0)\s*[1-9](?:[\s.-]*\d{2}){4}$');*/