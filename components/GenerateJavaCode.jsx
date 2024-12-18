const GenerateJavaCode = ({ classes, relations }) => {
  const generateJavaCode = () => {
    let code = "";

    classes.forEach((cls) => {
      const { name, cell } = cls;

      // Find inheritance relation for this class
      const inheritanceRelation = relations.find(
        (rel) => rel.target === name && rel.type === "inheritance"
      );
      const parentClass = inheritanceRelation ? inheritanceRelation.source : null;

      // Find aggregation and composition relations for this class
      const aggregationRelations = relations.filter(
        (rel) => rel.target === name && rel.type === "aggregation"
      );
      const aggregatedClasses = aggregationRelations.map((rel) => rel.source);

      const compositionRelations = relations.filter(
        (rel) => rel.target === name && rel.type === "composition"
      );
      const composedClasses = compositionRelations.map((rel) => rel.source);

      // Extract attributes and methods
      const attributes = cell.get("attributes") || [];
      const methods = cell.get("methods") || [];

      // Start class definition
      code += `public class ${name}`;
      if (parentClass) code += ` extends ${parentClass}`;
      code += " {\n\n";

      // Add composed classes as attributes (mandatory)
      composedClasses.forEach((compClass) => {
        code += `    private ${compClass} ${compClass.toLowerCase()};\n`;
      });

      // Add aggregated classes as attributes
      aggregatedClasses.forEach((aggClass) => {
        code += `    private ${aggClass} ${aggClass.toLowerCase()};\n`;
      });

      // Add attributes
      attributes.forEach((attr) => {
        code += `    private String ${attr};\n`;
      });

      code += "\n";

      // Add constructor for composed classes (mandatory initialization)
      if (composedClasses.length > 0) {
        code += `    public ${name}(`;
        code += composedClasses
          .map((compClass) => `${compClass} ${compClass.toLowerCase()}`)
          .join(", ");
        code += ") {\n";
        composedClasses.forEach((compClass) => {
          code += `        this.${compClass.toLowerCase()} = ${compClass.toLowerCase()};\n`;
        });
        code += "    }\n\n";
      }

      // Add Getters for composed classes
      composedClasses.forEach((compClass) => {
        const capitalizedComp = compClass.charAt(0).toUpperCase() + compClass.slice(1);
        code += `    public ${compClass} get${capitalizedComp}() {\n`;
        code += `        return ${compClass.toLowerCase()};\n`;
        code += `    }\n\n`;
      });

      // Add Getters for aggregated classes
      aggregatedClasses.forEach((aggClass) => {
        const capitalizedAgg = aggClass.charAt(0).toUpperCase() + aggClass.slice(1);
        code += `    public ${aggClass} get${capitalizedAgg}() {\n`;
        code += `        return ${aggClass.toLowerCase()};\n`;
        code += `    }\n\n`;
      });

      // Add Getters for attributes
      attributes.forEach((attr) => {
        const capitalizedAttr = attr.charAt(0).toUpperCase() + attr.slice(1);
        code += `    public String get${capitalizedAttr}() {\n`;
        code += `        return ${attr};\n`;
        code += `    }\n\n`;
      });

      // Add Setters for aggregated classes
      aggregatedClasses.forEach((aggClass) => {
        const capitalizedAgg = aggClass.charAt(0).toUpperCase() + aggClass.slice(1);
        code += `    public void set${capitalizedAgg}(${aggClass} ${aggClass.toLowerCase()}) {\n`;
        code += `        this.${aggClass.toLowerCase()} = ${aggClass.toLowerCase()};\n`;
        code += `    }\n\n`;
      });

      // Add Setters for attributes
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

      // End class definition
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
