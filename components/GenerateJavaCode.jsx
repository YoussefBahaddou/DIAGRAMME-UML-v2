const GenerateJavaCode = ({ classes }) => {
  const generateJavaCode = () => {
    let code = "";

    classes.forEach((cls) => {
      const { name, cell } = cls;

      // Extract attributes and methods
      const attributes = cell.get("attributes") || [];
      const methods = cell.get("methods") || [];

      code += `public class ${name} {\n\n`;

      // Add attributes
      attributes.forEach((attr) => {
        code += `    private String ${attr};\n`;
      });

      code += "\n";

      // Add Getters
      attributes.forEach((attr) => {
        const capitalizedAttr = attr.charAt(0).toUpperCase() + attr.slice(1);
        code += `    public String get${capitalizedAttr}() {\n`;
        code += `        return ${attr};\n`;
        code += `    }\n\n`;
      });

      // Add Setters
      attributes.forEach((attr) => {
        const capitalizedAttr = attr.charAt(0).toUpperCase() + attr.slice(1);
        code += `    public void set${capitalizedAttr}(String ${attr}) {\n`;
        code += `        this.${attr} = ${attr};\n`;
        code += `    }\n\n`;
      });

      // Add methods
      methods.forEach((method) => {
        code += `    public void ${method}() {\n`;
        code += `        // TODO: Implement ${method}\n`;
        code += `    }\n\n`;
      });

      code += "}\n\n";
    });

    return code;
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Code Java</h2>
      <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap text-sm overflow-auto max-h-96">
        {generateJavaCode()}
      </pre>
    </div>
  );
};

export default GenerateJavaCode;