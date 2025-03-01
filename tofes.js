// פונקציה לבדוק את תקינות הנתונים בטופס
function validateForm(event) {
    event.preventDefault(); // מונע את שליחת הטופס אם לא מאשרים את הוולידציה

    // קבלת הערכים מתוך השדות
    const username = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // ביטוי רגולרי לבדוק שהשם מלא באנגלית בלבד
    const usernameRegex = /^[a-zA-Z]+$/;

    // אם השם משתמש לא מכיל רק אותיות אנגליות
    if (!usernameRegex.test(username)) {
        alert("שם משתמש יכול להכיל רק אותיות אנגליות.");
        return false;
    }

    // אם הסיסמה לא מכילה לפחות אות גדולה אחת
    const passwordRegex = /^(?=.*[A-Z])/;
    if (!passwordRegex.test(password)) {
        alert("הסיסמה חייבת להכיל לפחות אות גדולה אחת.");
        return false;
    }

    // אם הכל בסדר, מציגים הודעה על שמירת הטופס
    alert("הטופס נשמר בהצלחה");

    // כאן אפשר לשלוח את הטופס אם זה היה אמיתי
    // form.submit();  // ניתן להשתמש אם רוצים לשלוח את הטופס

    return true;
}

// מקשר את פונקציית הוולידציה לכפתור ה-submit
document.querySelector('.button').addEventListener('click', validateForm);
