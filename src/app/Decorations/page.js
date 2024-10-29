'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"

const catalogues = [
  { id: 1, title: "Diwali Rangoli Collection", preview: "/Rangolithumb.JPG", pdf: "/Rangoli.pdf" },
  { id: 2, title: "Diwali Decoration Collection", preview: "/Decorationthumb.JPG", pdf: "/Decoration.pdf" },
  { id: 3, title: "TeaLight Holder Collection 1", preview: "/holder1thumb.JPG", pdf: "/TeaLightHolder1.pdf" },
  { id: 4, title: "TeaLight Holder Collection 2", preview: "/holder2thumb.JPG", pdf: "/TeaLightHolder2.pdf" },
]

export default function CatalogueViewer() {
  const [openDialog, setOpenDialog] = useState(null)

  return (
    <div className="p-4 bg-yellow-50">
      <h2 className="text-2xl text-center mb-4">Diwali Decoration Catalogues</h2>
      <div className="flex flex-col md:flex-row flex-wrap md:space-x-10 space-y-4 justify-center items-center">
        {catalogues.map((catalogue) => (
          <Card key={catalogue.id} className="w-[300px] h-fit md:h-[400px]">
            <CardContent className="p-4">
              <Image
              src={catalogue.preview}
              alt={catalogue.title}
              width={260}
              height={260}
              className="w-[260px]  rounded-md"
              ></Image>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <h3 className="font-semibold">{catalogue.title}</h3>
              <Dialog open={openDialog === catalogue.id} onOpenChange={(open) => setOpenDialog(open ? catalogue.id : null)}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FaEye className="h-4 w-4 mr-2" />
                    View PDF
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-full max-h-full w-[90vw] h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>{catalogue.title}</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 flex-grow overflow-hidden">
                    <iframe
                      src={catalogue.pdf}
                      title={catalogue.title}
                      className="w-full h-full"
                      style={{ height: 'calc(90vh - 4rem)' }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
// {/* <Dialog>
//                 <DialogTrigger asChild>
//                   
//                 </DialogTrigger>
//                 <DialogContent className="">
                   
//                 </DialogContent>
//               </Dialog> */}