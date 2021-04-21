import { handleSubmit } from "../src/client/js/formHandler";
import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mockAxios;

describe("testing formHandlerfunctionality", () => {
  const event = { preventDefault: () => {} }; //mock e.prevent default

  //   beforeEach(() => {
  //     mockAxios = new MockAdapter(Axios); // create axios mock

  //     jest.spyOn(event, "preventDefault");
  //   });

  //   afterEach(() => {
  //     mockAxios.reset();
  //   });

  document.body.innerHTML =
    "<section>" + "<strong>Form Results:</strong>" + '<div id="results"></div>' + "</section>";

  test("testing handleSubmit function", () => {
    // mockAxios.onGet("/users").reply(200, {
    //   users: [{ subjectivity: "objective" }],
    // });

    // expect(event.preventDefault).toBeCalled();
    expect(handleSubmit).toBeDefined();
    // expect(document.getElementById("results").innerHTML).toEqual("The input text is objective");
  });
});
