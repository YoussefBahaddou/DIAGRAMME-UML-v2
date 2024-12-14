const GeneratePHPCode = ({ classes, relations }) => {
    const generatePHPCode = () => {
      let code = "<?php\n\n";
      classes.forEach((cls) => {
        code += `class ${cls.name} {\n`;
        const attributes = cls.attributes || []; // Ensure attributes is defined
        attributes.forEach((attr) => {
          code += `    public $${attr.name};\n`;
        });
        code += "}\n\n";
      });
      // Add relations logic if applicable
      return code;
    };
  
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Code PHP</h2>
        <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap text-sm overflow-auto max-h-96">
          {generatePHPCode()}
        </pre>
      </div>
    );
  };
  
  export default GeneratePHPCode;
  