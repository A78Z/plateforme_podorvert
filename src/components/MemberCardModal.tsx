"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MemberCardModal() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    job: "",
    phone: "",
    village: "",
    photo: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (name === "photo" && files) {
      setFormData({ ...formData, photo: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can handle the submission (API, email, etc.)
    alert("Votre demande de carte membre a bien été envoyée ✅")
    setOpen(false)
  }

  return (
    <>
      {/* Button in the footer */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl px-6 py-3"
      >
        Demande de Carte Membre
      </Button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-green-700">
              Demande de Carte Membre
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div>
              <Label>Prénom et Nom</Label>
              <Input
                type="text"
                name="fullname"
                placeholder="Votre prénom et nom"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>Fonction</Label>
              <Input
                type="text"
                name="job"
                placeholder="Ex: Agriculteur, Étudiant..."
                value={formData.job}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>Téléphone</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="Votre numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>Village</Label>
              <Input
                type="text"
                name="village"
                placeholder="Votre village"
                value={formData.village}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>Photo</Label>
              <Input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl"
            >
              Envoyer ma demande
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
