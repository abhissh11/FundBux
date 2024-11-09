import { Alert, Button, Label, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router";
import { serverURL } from "./../utils/constants";
import axios from "axios";
import { useSelector } from "react-redux";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState("");
  const [loading, setLoading] = useState(false);

  //check if the user is authenticated, else send them to signin page
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem("showLoginToast", "true");
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  //form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || !formData.title || !formData.description) {
      return setPublishError("All fields are required");
    }

    try {
      setLoading(true);
      setPublishError(null);

      const res = await axios.post(
        `${serverURL}/api/campaign/create`,
        formData
      );
      const data = await res.data;

      if (data) {
        setLoading(false);
        navigate("/");
        return data;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setPublishError(error.response.data.message);
        setLoading(false);
      } else {
        setPublishError("An unexpected error occurred.");

        setLoading(false);
      }
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
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category" value="Campaign Category" />
                <Select id="category" required onChange={handleChange}>
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
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="desciption" value="Description" />
                <ReactQuill
                  theme="snow"
                  placeholder="Write about the Compaign Description."
                  className="h-32 max-w-[18rem] md:max-w-full mb-12 "
                  required
                  id="description"
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  className="bg-emerald-800 px-4 mt-2"
                  disabled={loading}
                >
                  {loading ? "Loading" : "Publish"}
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
