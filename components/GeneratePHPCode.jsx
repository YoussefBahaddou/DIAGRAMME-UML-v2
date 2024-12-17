const GeneratePHPCode = ({ classes }) => {
  const generatePHPCode = () => {
      let code = "<?php\n\n";

      classes.forEach((cls) => {
          const { name, cell } = cls;

          // Extract attributes and methods
          const attributes = cell.get('attributes') || [];
          const methods = cell.get('methods') || [];

          code += `class ${name} {\n`;

          // Add attributes
          attributes.forEach(attr => {
              code += `    public $${attr};\n`;
          });

          code += "\n";

          // Add methods
          methods.forEach(method => {
              code += `    public function ${method}() {\n`;
              code += `        // TODO: Implement ${method}\n`;
              code += `    }\n\n`;
          });

          code += "}\n\n";
      });

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
