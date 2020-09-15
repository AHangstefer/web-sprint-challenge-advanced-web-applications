import React from "react";
import { render, screen, waitFor, getByText } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {getAPI as mockAPI} from "../utils/getAPI";

jest.mock("../utils/getAPI")

const data = 
 [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba"
    },
    id: 6
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99"
    },
    id: 7
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99"
    },
    id: 8
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];

test("Fetches data and renders the bubbles", async () => {

    mockAPI.mockResolvedValueOnce(data);

    await render(<BubblePage/>);

     waitFor(()=> {
      const color = screen.getById("1");
      expect(color).toEqual(1);
      const color6 = screen.getById("6");
      expect(color6).toEqual(6);
      
    })

    //getByText(/colorList/i);

    // const text=getByText(/x lilac/i);
    // expect(text).toBeInTheDocument();
  // Finish this test
});


// const data = 
//  [
//   {
//     color: "aliceblue",
//     code: {
//       hex: "#f0f8ff"
//     },
//     id: 1
//   },
//   {
//     color: "limegreen",
//     code: {
//       hex: "#99ddbc"
//     },
//     id: 2
//   },
//   {
//     color: "aqua",
//     code: {
//       hex: "#00ffff"
//     },
//     id: 3
//   },
//   {
//     color: "aquamarine",
//     code: {
//       hex: "#7fffd4"
//     },
//     id: 4
//   },
//   {
//     color: "lilac",
//     code: {
//       hex: "#9a99dd"
//     },
//     id: 5
//   },
//   {
//     color: "softpink",
//     code: {
//       hex: "#dd99ba"
//     },
//     id: 6
//   },
//   {
//     color: "bisque",
//     code: {
//       hex: "#dd9a99"
//     },
//     id: 7
//   },
//   {
//     color: "softyellow",
//     code: {
//       hex: "#dcdd99"
//     },
//     id: 8
//   },
//   {
//     color: "blanchedalmond",
//     code: {
//       hex: "#ffebcd"
//     },
//     id: 9
//   },
//   {
//     color: "blue",
//     code: {
//       hex: "#6093ca"
//     },
//     id: 10
//   },
//   {
//     color: "blueviolet",
//     code: {
//       hex: "#8a2be2"
//     },
//     id: 11
//   }
// ];