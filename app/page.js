import './layout.js';
import Navibar from '../component/Navbar.jsx'
import Heroo from '../component/Hero.jsx'
import Cate from '../component/TopCate.jsx'
import Newit from '../component/Item.jsx'

// Asset Categories
import Mui from '../asseets/img/Group226.png'
import Fon from '../asseets/img/Group227.png'
import Ico from '../asseets/img/Group228.png'
import Web from '../asseets/img/Group229.png'

// Asset Items
import Robo from '../asseets/img/Group326.png'
import Onl from '../asseets/img/Group327.png'
import Bank from '../asseets/img/Group328.png'


function page() {
  return (  
    <>

    <Navibar/>

    <Heroo/>

    {/* TOP Categories */}
        <div className="container">
              <div className="row">
                <h5 className="col py-4 pop-22">Top Categories</h5>
              </div>

          <div className="row">
            <Cate
              gambar={Mui}
              nama="Mobile UI Kit"
              item="731 Items"
            />
            <Cate
              gambar={Fon}
              nama="Fonts"
              item="657 Items"
            />
            <Cate
              gambar={Ico}
              nama="Icon Set"
              item="83.599 Items"
            />
            <Cate
              gambar={Web}
              nama="Website UI Kit"
              item="4.500 Items"
            />
          </div>

        </div>


    {/* New Items */}
        <div className="container">
            <div className="row">
              <h5 className="col py-4 pop-22">New Items</h5>
            </div>

          <div className="row">
          <Newit
            gambar={Robo}
            nama="RoboCrypto App"
            item="Mobile UI Kit"
          />
          <Newit
            gambar={Onl}
            nama="Online Doctor Consultasion"
            item="Website UI Kit"
          />
          <Newit
            gambar={Bank}
            nama="Banking Crypto"
            item="Mobile UI Kit"
          />
          
          </div>
        </div>


    </>
    
  );
}

export default page;
