import FormPage from "./pageObjects/Form.page";
describe('Final task', () => {
  context("Final task scenario", () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
    it("Registration", () => {
      //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
      FormPage.firstName.type("Rihards");
      FormPage.lastName.type("Briezis");
      FormPage.email.type("name@example.com");
      FormPage.gender.click();
      FormPage.number.type("2233527323");
      //Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
        //Open date widget
        FormPage.openCal.click();
        //Select month
        FormPage.month.select("February");
        //Select Year
        FormPage.year.select("1930");
        //Select Day
        FormPage.day.click();
      //Set Subjects to Economics.
      FormPage.subject.type("Econ{enter}");
      //Set Hobbies to Music.
      FormPage.hobby.click();
      //Upload an image of your choice
      FormPage.image.selectFile('cypress/Files/750734020240867360.jpg')
      //Set State to NCR.
      FormPage.openSelectState.click();
      FormPage.selectStateNCR.click();
      //Set City to Delhi.
      FormPage.openSelectCity.click();
      FormPage.selectCityDelhi.click();
      //Click submit
      FormPage.currentAddress.type("idk");
      FormPage.submit.scrollIntoView().click({force: true});
      //Validate that each Labeled row contains the correct information.
      FormPage.nameRow.should("have.text","Rihards Briezis");
      FormPage.emailRow.should("have.text","name@example.com");
      FormPage.genderRow.should("have.text","Male");
      FormPage.mobileRow.should("have.text","2233527323");
      FormPage.dateOfBirthRow.should("have.text","28 February,1930");
      FormPage.subjectRow.should("have.text","Economics");
      FormPage.hobbyRow.should("have.text","Music");
      FormPage.pictureRow.should("have.text","750734020240867360.jpg");
      FormPage.addressRow.should("have.text","idk");
      FormPage.stateAndCityRow.should("have.text","NCR Delhi");
    });
  });
})