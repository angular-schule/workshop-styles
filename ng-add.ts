import { workspaces } from '@angular-devkit/core';
import {
  SchematicContext,
  SchematicsException,
  Tree,
  Rule,
} from '@angular-devkit/schematics';
import { readWorkspace } from '@schematics/angular/utility';

interface NgAddOptions {
  project: string;
}

export default function ngAdd(options: NgAddOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const workspace = await readWorkspace(tree);

    if (!options.project) {
      if (workspace.projects.size === 1) {
        // If there is only one project, return that one.
        options.project = Array.from(workspace.projects.keys())[0];
      } else {
        throw new SchematicsException(
          "There is more than one project in your workspace. Please select it manually by using the --project argument."
        );
      }
    }

    const project = workspace.projects.get(options.project);
    if (!project) {
      throw new SchematicsException(
        "The specified Angular project is not defined in this workspace"
      );
    }

    if (project.extensions.projectType !== "application") {
      throw new SchematicsException(
        `The package has to be added to project with type "application".`
      );
    }

    // add package to package.json
    if (tree.exists(workspace.root + '/src/styles.scss')) {
        const pjson = JSON.parse(tree.read('package.json')!.toString('utf-8'));
    
        const dependencies = pjson['dependencies'] || {};
    
        if (!dependencies[pkg]) {
            dependencies[pkg] = version;
            json[dependenciesType] = sortObjectByKeys(dependencies);
        }
    
            tree.overwrite('package.json', JSON.stringify(json, null, 2));
    }
    
  };
}
