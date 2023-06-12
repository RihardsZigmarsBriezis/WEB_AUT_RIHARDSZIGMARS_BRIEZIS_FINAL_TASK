class FormPage{
    static get firstName(){
        return cy.get("#firstName");
    }
    static get lastName(){
        return cy.get("#lastName");
    }
    static get email(){
        return cy.get("#userEmail");
    }
    static get gender(){
        return cy.contains('label', 'Male');
    }
    static get number(){
        return cy.get("#userNumber");
    }
    static get openCal(){
        return cy.get("#dateOfBirth");
    }
    static get month(){
        return cy.get(".react-datepicker__month-select");
    }
    static get year(){
        return cy.get(".react-datepicker__year-select");
    }
    static get day(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
    }
    static get subject(){
        return cy.get(".subjects-auto-complete__value-container");
    }
    static get hobby(){
        return cy.contains('label','Music');
    }
    static get image(){
        return cy.get('input[type=file]');
    }
    static get openSelectState(){
        return cy.contains('div','Select State');
    }
    static get selectStateNCR(){
        return cy.contains('div','NCR');
    }
    static get openSelectCity(){
        return cy.contains('div','Select City');
    }
    static get selectCityDelhi(){
        return cy.contains('div','Delhi');
    }
    static get currentAddress(){
        return cy.get("#currentAddress");
    }
    static get submit(){
        return cy.get("#submit");
    }
    static get nameRow(){
        return cy.contains('td', 'Student Name').siblings();
    }
    static get emailRow(){
        return cy.contains('td', 'Student Email').siblings();
    }
    static get genderRow(){
        return cy.contains('td', 'Gender').siblings();
    }
    static get mobileRow(){
        return cy.contains('td', 'Mobile').siblings();
    }
    static get dateOfBirthRow(){
        return cy.contains('td', 'Date of Birth').siblings();
    }
    static get subjectRow(){
        return cy.contains('td', 'Subjects').siblings();
    }
    static get hobbyRow(){
       return cy.contains('td', 'Hobbies').siblings();
    }
    static get pictureRow(){
        return cy.contains('td', 'Picture').siblings();
    }
    static get addressRow(){
        return cy.contains('td', 'Address').siblings();
    }
     static get stateAndCityRow(){
        return cy.contains('td', 'State and City').siblings();
    }
}
export default FormPage;