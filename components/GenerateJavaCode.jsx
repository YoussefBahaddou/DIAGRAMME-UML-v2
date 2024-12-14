const GenerateJavaCode = ({ classes, relations }) => {
    const generateJavaCode = () => {
      let code = "";
      classes.forEach((cls) => {
        code += `public class ${cls.name} {\n`;
  
        // Ensure attributes are defined
        const attributes = cls.attributes || [];
        attributes.forEach((attr) => {
          const type = attr.type || "Object"; // Default type
          const name = attr.name || "undefined"; // Fallback attribute name
          code += `    private ${type} ${name};\n`;
        });
  
        code += "\n    // Getters and Setters\n";
        attributes.forEach((attr) => {
          const name = attr.name || "undefined";
          const type = attr.type || "Object";
          const capitalizedName =
            name.charAt(0).toUpperCase() + name.slice(1);
          code += `    public ${type} get${capitalizedName}() {\n`;
          code += `        return ${name};\n    }\n\n`;
          code += `    public void set${capitalizedName}(${type} ${name}) {\n`;
          code += `        this.${name} = ${name};\n    }\n\n`;
        });
  
        code += "}\n\n";
      });
  
      // Add relations logic if needed
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
  