import React from 'react';
import Image from "next/image";
import { Button, Chip, Separator } from '@heroui/react';
import { FaHeart } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import Link from 'next/link';
const PhotoDetailsPage = async ({params}) => {
    const {id} = await params ;
    console.log(id)
    const res= await fetch('https://project-pixgen.vercel.app/data.json');
    const photos = await res.json();
    const photo = photos.find(p=> p.id ==id);
    // console.log(photo);
    return (
      <div className="max-w-6xl mx-auto p-6">
  <div className="grid md:grid-cols-2 gap-8">

    {/* Image */}
    <div className="relative aspect-square overflow-hidden rounded-2xl">
      <Image
        src={photo.imageUrl}
        fill
        alt={photo.title}
        className="object-cover"
      />

      <Chip
        size="sm"
        className="absolute top-4 right-4"
      >
        {photo.category}
      </Chip>
    </div>

    {/* Details */}
    <div className="space-y-5">

      <div>
        <h1 className="text-4xl font-bold">
          {photo.title}
        </h1>

        <p className="text-gray-500 mt-2">
          {photo.prompt}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Model
          </p>
          <p className="font-semibold">
            {photo.model}
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Resolution
          </p>
          <p className="font-semibold">
            {photo.resolution}
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Likes
          </p>
          <p className="font-semibold flex items-center gap-2">
            ❤️ {photo.likes}
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Downloads
          </p>
          <p className="font-semibold flex items-center gap-2">
            ⬇️ {photo.downloads}
          </p>
        </div>

      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold mb-3">
          Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {photo.tags.map((tag) => (
            <Chip key={tag} variant="flat">
              #{tag}
            </Chip>
          ))}
        </div>
      </div>

      {/* Date */}
      <div className="border rounded-xl p-4">
        <p className="text-sm text-gray-500">
          Created At
        </p>

        <p className="font-medium">
          {new Date(photo.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">

        <Button color="primary" className="flex-1">
          Download
        </Button>

        <Button variant="bordered" className="flex-1">
          ❤️ Like
        </Button>

      </div>

    </div>

  </div>
</div>
  );
};

export default PhotoDetailsPage;