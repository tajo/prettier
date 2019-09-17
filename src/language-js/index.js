"use strict";

const estreePrinter = require("./printer-estree");
const estreeJsonPrinter = require("./printer-estree-json");
const options = require("./options");
const createLanguage = require("../utils/create-language");

const languages = [
  createLanguage(require("linguist-languages/data/JavaScript"), {
    override: {
      since: "0.0.0",
      parsers: ["babel", "flow"],
      vscodeLanguageIds: ["javascript"]
    },
    extend: {
      interpreters: ["nodejs"]
    }
  }),
  createLanguage(require("linguist-languages/data/JavaScript"), {
    override: {
      name: "Flow",
      since: "0.0.0",
      parsers: ["babel", "flow"],
      vscodeLanguageIds: ["javascript"],
      aliases: [],
      filenames: [],
      extensions: [".js.flow"]
    }
  }),
  createLanguage(require("linguist-languages/data/JSX"), {
    override: {
      since: "0.0.0",
      parsers: ["babel", "flow"],
      vscodeLanguageIds: ["javascriptreact"]
    }
  })
];

const printers = {
  estree: estreePrinter,
  "estree-json": estreeJsonPrinter
};

module.exports = {
  languages,
  options,
  printers
};
