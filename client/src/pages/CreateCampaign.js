import { Alert, Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router";
import { serverURL } from "./../utils/constants";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="md:mx-36 mx-3 my-10 min-h-svh flex flex-col items-center">
        <div className="pb-10 flex flex-col gap-4 text-center items-center">
          <h1 className="text-4xl font-extrabold text-emerald-700">
            Start Your campaign Now
          </h1>
          <p className="tetx-lg font-sm text-gray-600">
            Get your campaigns seen by thousands of people for contributions.
          </p>
        </div>

        {/* form */}

        <div className="md:w-2/3 border-2 border-emerald-800 p-4 rounded-xl border-dashed">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-1">
              <h2 className="text-lg font-semibold">Capaign details</h2>
              <p className="text-md text-gray-600">
                Provide Campaign description and details
              </p>
            </div>
            <div className="py-5 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title" value="Campaign Title" />
                <TextInput
                  type="text"
                  required
                  id="title"
                  placeholder="e.g. Contribute to Clean India Campaign"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category" value="Campaign Category" />
                <Select
                  id="category"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option>--select--</option>
                  <option>Environment</option>
                  <option>Social-welfare</option>
                  <option>Medical Assistance</option>
                  <option>NGO</option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="target" value="Contribution-Target" />
                <TextInput
                  type="text"
                  id="target"
                  required
                  placeholder="Contribution-Target in Rupees."
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="desciption" value="Description" />
                <ReactQuill
                  theme="snow"
                  placeholder="Write about the Compaign Description."
                  className="h-32 mb-12"
                  required
                  onChange={(value) => {
                    setFormData({ ...formData, description: value });
                  }}
                />
              </div>
              <div className="pt-2">
                <Button type="submit" className="bg-emerald-800 px-4">
                  Publish
                </Button>
              </div>
              {publishError && (
                <Alert color={"failure"} className="mt-5">
                  {publishError}
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
