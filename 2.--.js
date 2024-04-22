function calculateEmailPercentage(sent, limit) {    
    if (sent === 0) {
        return "Hech qanday e-mail yuborilmagan";
    }
    if (!limit) {
        limit = 1000;
    }
    if (sent >= limit) {
        return "Kunlik chegaraga yetildi";
    }
    var percentage = (sent / limit) * 100;
    return Math.floor(percentage);
}

var sentEmails = 101;
var emailLimit = 1000;

var emailPercentage = calculateEmailPercentage(sentEmails, emailLimit);
console.log("E-mail yuborilgan foizi:", emailPercentage + "%");
