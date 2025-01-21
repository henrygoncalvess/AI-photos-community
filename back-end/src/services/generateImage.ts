import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
import { env }from '../env';

export async function generate(prompt: string, id: string) {
    const payload = {
      prompt: prompt,
      output_format: "jpeg",
      style_preset: "enhance"
    };

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      axios.toFormData(payload, new FormData()),
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: { 
          Authorization: `Bearer ${env.STABILITY_API_KEY}`, 
          Accept: "image/*" 
        },
      },
    );

    console.log(response.status);

    if(response.status === 200) {
      fs.writeFileSync(`./uploads/${id}.jpeg`, Buffer.from(response.data));
      return `http://localhost:3000/images/${id}.jpeg`
    } else {
      return { status: response.status, message: response.data.toString() }
    }
}
