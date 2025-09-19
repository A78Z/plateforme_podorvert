import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MemberCardForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    village: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can handle the submission (API, email, etc.)
    alert("Votre demande de carte membre a bien été envoyée ✅")
    setFormData({ fullname: "", email: "", phone: "", village: "" });
  }

  return (
    <Card className="w-full max-w-lg mx-auto bg-white shadow-xl rounded-2xl border border-green-200">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-green-700">
          Demande de Carte Membre
        </h2>
        <p className="text-sm text-center text-gray-500">
          Rejoignez Podor Vert et recevez votre carte membre officielle
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="fullname"
            placeholder="Nom complet"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="village"
            placeholder="Village"
            value={formData.village}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl"
          >
            Obtenir ma carte
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
