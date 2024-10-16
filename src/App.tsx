import React from 'react'

import Header from "alope-ui/Header";

export default function App() {
  return (
    <Header
        bgUrl="https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        logoUrl="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere suscipit placeat eligendi doloremque. Aspernatur, culpa officiis ipsam facere saepe at perferendis est. Corporis adipisci at quibusdam saepe reprehenderit harum!"
        actions={[
          {
            placeholder: "Test",
            buttonColor: "primary",
            to: "/",
          },
          {
            placeholder: "Test 2",
            buttonColor: "light",
            to: "/",
          },
        ]}
      />
  )
}
