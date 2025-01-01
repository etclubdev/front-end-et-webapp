import './ETNewsPage.css';

import { NavbarV2 } from '../../components/NavbarV2';
import ETNews from '../../components/ETNews';

export const ETNewsPage = () => {
    return (
        <div className="etnews-page">
            <NavbarV2/>
            <ETNews/>
        </div>
    )
}