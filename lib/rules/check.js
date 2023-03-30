/**
 * @fileoverview Check whether the specified chapter exists in the Markdown file.
 * @author wendingding
 */

'use strict';

const fs = require('fs');

const check_markdown_sections = {
    meta: {
      type: "problem",
      docs: {
        description: 'Check whether the specified chapter exists in the Markdown file',
        category: 'Possible Errors',
        recommended: true,
        url: null, // URL to the documentation page for this rule
      },
      schema: [
        {
          type: 'object',
          properties: {
            sections: {
              type: 'array',
              items: {
                type: 'string',
              },
              default:['第一部分：概述','第二部分：运行指南','第三部分：开发指南','第四部分：设计文档','第五部分：CHANGELOG','第六部分：FAQ']
            },
          },
        },
        {
            type: 'string',
            properties: {
              file: {
                type: 'string',
                default:'README.md'
              },
            },
          },
      ],
      messages: {
        "no-check": "No sections to check",
        "no-sections": `Missing {{ section }} section in Markdown file`,
      },
    },
    create: function (context) {
      const options = context.options[0];
      const sections = options.sections;
      const file = options.file;

      if (!sections || sections.length === 0) {
        context.report({
          loc: { line: 1, column: 0 },
          messageId:'no-check',
        });
      }

      return {
        Program: function (node) {
          const readmePath = `${process.cwd()}/${file}`;
          const readmeContent = fs.readFileSync(readmePath, 'utf8');

          for (const section of sections) {
            const regex = new RegExp(`(?<=^|\\n)## ${section}(?=\\n)`);
            const exists = regex.test(readmeContent);

            if (!exists) {
              context.report({
                node,
                messageId: 'no-sections',
                "data": {
                    "section": section
                  }
              });
            }
          }
        },
      };
    },
};

module.exports = check_markdown_sections;