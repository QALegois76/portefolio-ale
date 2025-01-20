import { Routes } from '@angular/router';
import { InfoComponentComponent } from './info-component/info-component.component';
import { ExperiencesComponentComponent } from './experiences-component/experiences-component.component';
import { FormationsComponentComponent } from './formations-component/formations-component.component';
import { CompetencesComponentComponent } from './competences-component/competences-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';



export const routes: Routes = [
    { path: '', component: InfoComponentComponent },
    { path: 'formation', component: FormationsComponentComponent },
    { path: 'experience', component: ExperiencesComponentComponent },
    { path: 'projet', component: ProjectsComponentComponent},
    { path: 'competence', component: CompetencesComponentComponent },
    { path: 'contact', component: ContactComponentComponent}
];


