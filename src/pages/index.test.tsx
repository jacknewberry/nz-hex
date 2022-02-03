import * as React from "react"
import IndexPage from "./index";
import {render} from "@testing-library/react";

describe("when running", () => {
    it("renders something", () =>{
        render(<IndexPage/>)
    })
})