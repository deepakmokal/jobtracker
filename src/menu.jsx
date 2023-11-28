
import { v4 as uuidv4 } from 'uuid';
import { AddJobIcon, JobFindIcon, ProfileIcon, StatsIcon } from './icons';
const menus = [
    {
        id: uuidv4(),
        name: 'Stats',
        icon: <StatsIcon  />
    },
    {
        id: uuidv4(),
        name: 'All Jobs',
        icon: <JobFindIcon />
    },
    {
        id: uuidv4(),
        name: 'Add Job',
        icon: <AddJobIcon />
    },
    {
        id: uuidv4(),
        name: 'Profile',
        icon: <ProfileIcon />
    },

]

export default menus