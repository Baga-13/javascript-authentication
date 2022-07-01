class Login {
    // using constructor
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', (e) => {
            e.prevent.default();
            self.fields.forEach((field) => {
                
            })
        })
    }
}

// grabbing this class for the entire form from the html
const form = doccument.querySelector('.loginForm');

// a conditional statement for when the state in update i.e when the form is being filled
if(form) {
    // these are the two required fields
    const fields = ['username', 'password'];
    const validator = new Login(form, fields);
}