"use client";
const GeneratePHPCode = ({ classes, relations }) => {
  const generatePHPCode = () => {
    let code = "<?php\n\n";

    classes.forEach((cls) => {
      const { name, cell } = cls;

      // Find parent class if there is an inheritance relation
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
      code += `class ${name}`;
      if (parentClass) code += ` extends ${parentClass}`;
      code += " {\n\n";

      // Add composed classes as properties
      composedClasses.forEach((compClass) => {
        code += `    public $${compClass.toLowerCase()};\n`;
      });

      // Add aggregated classes as properties
      aggregatedClasses.forEach((aggClass) => {
        code += `    public $${aggClass.toLowerCase()};\n`;
      });

      // Add attributes
      attributes.forEach((attr) => {
        code += `    public $${attr};\n`;
      });

      code += "\n";

      // Add constructor for composed classes
      if (composedClasses.length > 0) {
        code += `    public function __construct(`;
        code += composedClasses
          .map((compClass) => `$${compClass.toLowerCase()}`)
          .join(", ");
        code += `) {\n`;
        composedClasses.forEach((compClass) => {
          code += `        $this->${compClass.toLowerCase()} = $${compClass.toLowerCase()};\n`;
        });
        code += `    }\n\n`;
      }

      // Add methods
      methods.forEach((method) => {
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
