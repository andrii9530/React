import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import LoginA from "./Components/Login/LoginA";
import RegisterA from "./Components/Register/RegisterA";
import MyInfo from "./Components/MyInfo/MyInfo";
import MyPets from "./Components/MyPets/Pets"; 
import FavoriteMovie from "./Components/FavoriteMovie/FavoriteMovie"; 
import poster from './Постер.jpg';
import Face from './Face.png';
import Cat1 from './Анюта.png';
//import Cat2 from './Чуча.png';
//import Dog from './Льолік.png';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/MyInfo" element={<MyInfo FullName="Майструк Андрій володимирович"
     Face={Face}
     dateOfBirth="13.11.2005"
     Location="Україна Рівне с.Поляни"
     phone="380 68 330 2292"
     Email="lisoryb1@gmail.com"
     experience="Без досвіду"
     skills="З вас гроші з мене виконана робота^^"
     />} />
          <Route path="/MyPets" element={<MyPets FullName="Анька"
     Photo={Cat1}
     Kind="Котячі"
     Breed="Напів породиста"
     Sex="Жіноча"
     />}
      />
          <Route path="/FavoriteMovie" element={<FavoriteMovie title="Я побєда і Берлін" 
     director= "Олексій Учитель"
     releaseYear= "2020"
     studio= "Київнаукфільм"
     poster={poster}
     description= "Це фільм про пригоди, дружбу та перемогу(Книга піже)"
     />} />
          <Route path="/LoginA" element={<LoginA />} />
          <Route path="/Register" element={<RegisterA />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
