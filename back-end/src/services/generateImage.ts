import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";

export async function generate(prompt: string, id: string) {
    const payload = {
      prompt: prompt,
      output_format: "jpeg",
      model: "sd3.5-medium",
      cfg_scale: 10
    };

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
      axios.toFormData(payload, new FormData()),
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: { 
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`, 
          Accept: "image/*" 
        },
      },
    );

    if(response.status === 200) {
      fs.writeFileSync(`./uploads/${id}.jpeg`, Buffer.from(response.data));
    } else {
      throw new Error(`${response.status}: ${response.data.toString()}`);
    }
}
