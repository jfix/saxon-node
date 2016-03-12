var fs = require('co-fs');
var saxon = require('saxonXslt');

  describe("Schema Validator foo", function() {
    var content;
    var saxonProcessor;

    before(function*() {
//      yield setup();
        content = yield fs.readFile("./test/examples/query/books.xml", "utf8");
        saxonProcessor = new saxon.SaxonProcessor(true);
        console.dir("saxonProcessor "+saxonProcessor.version());
        saxonProcessor.setcwd(".");
    });

    it("should be from memory buffer", function*() {
        try
        {
            var schemaValidator = saxonProcessor.newSchemaValidator();
//            schemaValidator.registerSchemaFromFile("./test/examples/query/books.xsd");
//            schemaValidator.validate("./test/examples/query/books.xml");
            schemaValidator.registerSchemaFromFile("./test/examples/xsd/cml/schema.xsd");
           // schemaValidator.validate("./test/examples/xml/sodium-icosanoate.xml");
            var vp=schemaValidator.validateToNode("./test/examples/xml/sodium-icosanoate.xml");
//            var vp=schemaValidator.getValidationReport();
            //htmlContent.toString().should.equal("<html>\n   <head>\n      <title>A list of books</title>\n   </head>\n   <body>\n      <h1>A list of books</h1>\n      <p>Here are some interesting books:</p>\n      <ul>\n         <li>\n            <i>Jude the Obscure</i> by Thomas Hardy</li>\n         <li>\n            <i>Pride and Prejudice</i> by Jane Austen</li>\n         <li>\n            <i>Tess of the d\'Urbervilles</i> by Thomas Hardy</li>\n         <li>\n            <i>The Big Over Easy</i> by Jasper Fforde</li>\n         <li>\n            <i>The Eyre Affair</i> by Jasper Fforde</li>\n         <li>\n            <i>Wuthering Heights</i> by Charlotte Brontë</li>\n      </ul>\n   </body>\n</html>");
             console.dir(vp.size());
             console.dir("vp getValidationReport");
        }
        catch (err) {
        console.dir(err.message);
        }
    });

    after(function*() {
//      yield teardown();
    });
  });