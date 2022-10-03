import React from "react";
import ImageCard from "./components/ImageCard";
import Paper from "./components/Paper";
import MobileLayout from "./layouts/MobileLayout";

function Left(props) {
  return (
    <div style={{ flex: 1 }}>
      <img
        src={props.src}
        alt="Ini gambar lho"
        style={{
          width: 150,
          height: 150,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>

      <MobileLayout>
        <h2>Mobile Layout</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui nihil
          officia placeat sint! Possimus, minima, iste doloremque quia repellat
          a, nesciunt necessitatibus odio facilis delectus sunt voluptates
          exercitationem sed?
        </p>

        <Paper>
          <h1>Diar J R</h1>
        </Paper>

        <Paper>
          <h1>Diar J R</h1>
        </Paper>

        <ImageCard
          left={
            <Left src="https://images.pexels.com/photos/12128381/pexels-photo-12128381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          }
          right={<div style={{ flex: 3 }}>ini kanan</div>}
        />
      </MobileLayout>
    </div>
  );
}
