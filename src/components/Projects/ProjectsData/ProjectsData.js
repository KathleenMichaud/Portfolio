import { designSection } from "./Design/DesignSection";
import { illustrationSection } from "./Illustrations/IllustrationsSection";
import { photoSection } from "./Photos/PhotoSection";

export const ProjectsData = [
    {
        categoryNb: 1,
        ...designSection
    },
    {
        categoryNb: 2,
        ...photoSection,
    },
    {
        categoryNb: 3,
        ...illustrationSection,
    }
]