import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import add from '../assets/images/add.png';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='home'>
        <div className="home-page">
      <img src="https://images.ctfassets.net/621t91s0mnkp/2LR6MuM8JmD8hlQcijbDQf/d7b55bce369e296245042d9f8934bd69/car-071624-bts-hero-40off-desktop.png?fm=webp&w=1366" alt="Banner" className="banner" title='Hello' onClick={()=>{navigate('./products')}}/>
      
    </div>
    <div className="promotions-container">
      <div className="promotion-item">
        <div className="label">
          <img src="https://images.ctfassets.net/621t91s0mnkp/6zpSLosCl51sTI3g42CbGD/2c5239feefdbb098e8c1df3f1e1399ae/car-BOG2-whitebg-orangetext.svg" alt="" onClick={()=>{navigate('./products')}}/>
        </div>
        <img src="https://images.ctfassets.net/621t91s0mnkp/6D0Y0vNoTfWjr0tRujBjJe/8826415a007897907cb638c6ae98e233/car-071624-bts-denim.jpg?fm=webp&w=1366" alt="Denim Deal" onClick={()=>{navigate('./products')}}/>
        <div className="description">denim deal &gt;</div>
      </div>
      <div className="promotion-item">
        <div className="label">
          <img src="https://images.ctfassets.net/621t91s0mnkp/1b6xHISvCjvwnbohs2MHB8/4d2aede37b99dd29fa2665941f10a64b/car-from5-whitebg-orangetext.svg" alt="" onClick={()=>{navigate('./products')}}/>
        </div>
        <img src="https://images.ctfassets.net/621t91s0mnkp/2dm5L2ePRsTrZFOmWJeWOe/8c0d1042ca6333ac7db08d52e3982e29/car-071624-bts-uniform.jpg?fm=webp&w=1366" alt="Polos and Shorts" onClick={()=>{navigate('./products')}}/>
        <div className="description">polos & shorts &gt;</div>
      </div>
      <div className="promotion-item">
        <div className="label">
          <img src="https://images.ctfassets.net/621t91s0mnkp/5vmNZEhF2OWUdiuZPvI3Zg/81a8b6a6d60e8e1a507a482a66c055cd/car-40off-whitebg-orangetext.svg" alt="" onClick={()=>{navigate('./products')}}/>
        </div>
        <img src="https://images.ctfassets.net/621t91s0mnkp/64cowParwFxpeyeXtX8GF3/83ebee34302d550beccdb16b3e21786d/car-071624-bts-toddlertime.jpg?fm=webp&w=1366" alt="Preschool Drop" onClick={()=>{navigate('./products')}}/>
        <div className="description">preschool drop &gt;</div>
      </div>
      <div className="promotion-item">
        <div className="label">
          <img src="https://images.ctfassets.net/621t91s0mnkp/5vmNZEhF2OWUdiuZPvI3Zg/81a8b6a6d60e8e1a507a482a66c055cd/car-40off-whitebg-orangetext.svg" alt="" onClick={()=>{navigate('./products')}}/>
        </div>
        <img src="https://images.ctfassets.net/621t91s0mnkp/2CpsIsST0xe4JA5b9d0COx/53061a26c63d322316024e345cda6eee/car-071624-bts-active.jpg?fm=webp&w=1366" alt="New Active" onClick={()=>{navigate('./products')}}/>
        <div className="description">new active &gt;</div>
      </div>
    </div>
    <div className="promo2">
      
    <img src="https://images.ctfassets.net/621t91s0mnkp/5glqdwyPcy221wQM43xUIh/a73cdd0274948d12256d457e5ec67933/car-071624-bts-sleep-bg-desktop2a.jpg?fm=webp&w=1366" alt="New Active" onClick={()=>{navigate('./products')}}/>
    <div className="label2">
        <img src="https://images.ctfassets.net/621t91s0mnkp/5vmNZEhF2OWUdiuZPvI3Zg/81a8b6a6d60e8e1a507a482a66c055cd/car-40off-whitebg-orangetext.svg" alt="" onClick={()=>{navigate('./products')}}/>
      </div>
    <div className="description">Shop Baby Essentials &gt;</div>
    </div>
    <div className="categories">
      <div className="category-list">

      <img src="https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp&w=133" alt="" />
      <div className="description">babygirl</div>
      </div>
      <div className="category-list">
        
      <img src="https://images.ctfassets.net/621t91s0mnkp/5P918A0lytB7VJQo3di3wb/51cc58926d24bff97b613c7193b44e90/car-011624-CS-faces-tg.png?fm=webp&w=133" alt="" />
       <div className="description">toddler girl</div>
      </div>
      <div className="category-list">
        
      <img src="https://images.ctfassets.net/621t91s0mnkp/6ItHKimGGyibZja3HuYJ89/aa6a162cc4ff2b7cccc22a32d0ab2ce4/car-011624-CS-faces-kg.png?fm=webp&w=133" alt="" />
       <div className="description">kid girl</div>
      </div>
      <div className="category-list">
        
      <img src="https://images.ctfassets.net/621t91s0mnkp/36TEWbAAn2YjgJxEtOfEtN/b41cea9f0ca093f33ddfff1fc6a2c6b5/car-011624-CS-faces-bb.png?fm=webp&w=133" alt="" />
       <div className="description">baby boy</div>
      </div>
      <div className="category-list">
        
      <img src="https://images.ctfassets.net/621t91s0mnkp/3o9nlGntcVgnNTc7L5lsAD/a7cbe48b3b0edde13f1fdcf5685a0288/car-011624-CS-faces-tb.png?fm=webp&w=133" alt="" />
       <div className="description">toddler boy</div>
      </div>
      <div className="category-list">
        
      <img src="https://images.ctfassets.net/621t91s0mnkp/4nlDFe0E1b0hEN389Ci9HW/2e17e5ba1a4db0d750c2e786eebd36b0/car-011624-CS-faces-kb.png?fm=webp&w=133" alt="" />
       <div className="description">kid boy</div>
      </div>
      <div className="category-list">

      <img src="https://images.ctfassets.net/621t91s0mnkp/Cdm8OF74GS96tnr9HmiOC/37b11060ed07e19ce0136ffbb041aebe/car-from5-red.png?fm=webp&w=133" alt="" />
       <div className="description">tops & bottoms</div>
      </div>
      <div className="category-list">
        
      <img src="https://images.ctfassets.net/621t91s0mnkp/1x7xZ135nRMYHfCSyPCgvB/afde9dba09f966f8a811bab66e080f3d/car-from9-red.png?fm=webp&w=133" alt="" />
       <div className="description">pajamas</div>
        </div>
        <div className="category-list">
        
    <img src="https://images.ctfassets.net/621t91s0mnkp/6zUH5Y3hKYCInYspX1YDhE/efe9e4e6d1194e32d3d3fe1614c4cee8/car-40off-red.png?fm=webp&w=133" alt="" />
      </div>
      <div className="category-list">
        
    <img src="https://images.ctfassets.net/621t91s0mnkp/1ZoPvzyuFpruCitmwBGoXw/f413d9ab5d64cf2991ac6927e27840cf/car-ut50off-red.png?fm=webp&w=133" alt="" />
        </div>
        <div className="category-list">
        
    <img src="https://images.ctfassets.net/621t91s0mnkp/1ZoPvzyuFpruCitmwBGoXw/f413d9ab5d64cf2991ac6927e27840cf/car-ut50off-red.png?fm=webp&w=133" alt="" />
      </div>
      <div className="category-list">
        
    <img src="https://images.ctfassets.net/621t91s0mnkp/5w8pHAuvRL4P0QUjRZpYnE/987b63affeaae430fafeaf938792f142/car-ut70off-red.png?fm=webp&w=133" alt="" />
      </div>
    </div>
    <div className="promo3">
      <div className="promo3_1">
        <img src="https://images.ctfassets.net/621t91s0mnkp/69H1CYhghjPlkQxKXQ1Yki/38618d9f2bedd89648d3b0aea4cbead2/car-071624-bts-EDV.jpg?fm=webp&w=1366" alt="" onClick={()=>{navigate('./products')}}/>
        <h1>SIZE-UPS START HERE</h1>
        <h4>They grow fast.These prices not</h4>
        <div className="description">Shop Now &gt;</div>

      </div>
      <div className="promo3_2">
        <img src="https://images.ctfassets.net/621t91s0mnkp/1qhC9Sz9xLdXSh4HDoOFhE/5b9696af9edc3546596ff535a62657c2/car-071624-bts-halloween.jpg?fm=webp&w=1366" alt="" onClick={()=>{navigate('./products')}}/>
        <h1>BOO!</h1>
        <h4>Halloween styles just droped</h4>
        <div className="description">Shop Now &gt;</div>

      </div>
    </div>
    <div className="promo3">
      <div className="promo3_1">
        <img src="https://images.ctfassets.net/621t91s0mnkp/6wv0SvNAi2I1ZMzzQzd3D4/f4046e260c07760a6a70cbb993c95640/car-071624-bts-minimix.jpg?fm=webp&w=1366" alt=""onClick={()=>{navigate('./products')}} />
        <h1>THE MINIMALIST MIX</h1>
        <h4>A new capsule that's anything but basic</h4>
        <div className="description">Shop Now &gt;</div>

      </div>
      <div className="promo3_2">
        <img src="https://images.ctfassets.net/621t91s0mnkp/5wGgb2gUUm6RgouluKRmd/2b37255e1b67c0f7fb8b923907880340/car-071624-bts-purelysoft.jpg?fm=webp&w=1366" alt="" onClick={()=>{navigate('./products')}}/>
        <h1>PURELY SOFT</h1>
        <h4>Make 'sleeping through the night' more than a dream</h4>
        <div className="description">Shop Now &gt;</div>

      </div>
    </div>
    <div className="reward">
      <img src={add} alt="" onClick={()=>{navigate('./signup')}} />
    </div>
    <div className="promo4">
      <div className="container">
        <img src="https://images.ctfassets.net/621t91s0mnkp/ANv1e1KG5qXGiSlsOK9C7/50d20158d58666c24decf34559513376/OKB-logo-seasonal-desktop.png?fm=webp&w=342" alt="" />
        <h3>Endooring cool rooted in iconic denim.</h3>
      </div>
      <div className="container">
        <img src="https://images.ctfassets.net/621t91s0mnkp/6AZfJqx7pe0sliq3vAYB2V/811af7ca6f281b31e62e6e79f36fa627/LP-logo-seasonal-desktop.png?fm=webp&w=342" alt="" />
        <h3>Crafted in the purest organic fabric.</h3>
      </div>
      <div className="container">
        <img src="https://images.ctfassets.net/621t91s0mnkp/2hzAqWOogSX1iX9Yf0YsT0/0ccfa97c8306bb8bd0b9f297bfb7dcd5/PurelySoft-logo-seasonal-desktop.png?fm=webp&w=342" alt="" />
        <h3>Soft,stretchy essentials to love all year.</h3>
      </div>
      <div className="container">
        <img src="https://images.ctfassets.net/621t91s0mnkp/5y2fbMc2s5pBZqf5xVJLoP/a97d6dfe0f501b9106855e551ce9f601/SH-logo-seasonal-desktop.png?fm=webp&w=342" alt="" />
        <h3>Award-winning gear that grow with baby.</h3>
      </div>
    </div>
   
  </div>

  );
};

export default HomePage;
