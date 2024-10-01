import Footer from "../Componnents/Footer/Footer";
import GetOffer from "../Componnents/GetOffer/GetOffer";
import Hero from "../Componnents/Hero/Hero";
import Items from "../Componnents/Items/Items";
import NewCollections from "../Componnents/Items/NewCollections";
import Offer from "../Componnents/Offers/Offer";
import React from "react";
export default function Shop(){
    return (
      <div>
        <Hero />
        <Items />
        <Offer />
        <NewCollections />
        <GetOffer />
        <Footer />
      </div>
    );
}