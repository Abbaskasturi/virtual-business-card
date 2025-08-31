document.addEventListener('DOMContentLoaded', () => {
    const vCardBtn = document.querySelector('.vcard-btn');

    if (vCardBtn) {
        vCardBtn.addEventListener('click', () => {
            const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Abbas;Kasturi
FN:Kasturi Abbas
ORG:Your Company
TITLE:Your Profession / Role
TEL;TYPE=WORK,VOICE:7993281864
EMAIL;TYPE=PREF,INTERNET:kasturiabbaspatel@gmail.com
URL:https://linkedin.com/in/kasturiabbas
END:VCARD`;

            const blob = new Blob([vCardData], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'kasturi-abbas.vcf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
});