import axios from "axios";

export async function fetchDataThroughAPI({ showAlert }) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/data1`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        showAlert("Please try again later, something is wrong", 1);
        reject("Something is wrong");
      });
  });
}

export async function uploadDataThroughAPI({ showAlert, step1, step2 }) {
  if (!step1 || !step2) return showAlert("Enter form data correctly", 1);

  const body = {
    job_title: step1.job_title,
    company_name: step1.company_name,
    industry: step1.industry,
    location: step1.location,
    remote_type: step1.remote_type,
    experience_min: step2.experience_min,
    experience_max: step2.experience_max,
    salary_min: step2.salary_min,
    salary_max: step2.salary_max,
    total_employee: step2.total_employee,
    apply_type: step2.apply_type,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/data1`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: body,
      })
      .then((res) => {
        console.log(res);
        showAlert("Data uploaded successfully", 0);
        resolve();
      })
      .catch((e) => {
        showAlert("Something went wrong : error", 1);
        reject("Something went wrong");
      });
  });
}

export async function deleteDataThroughAPI({ showAlert, id }) {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `https://${process.env.REACT_APP_API_KEY}.mockapi.io/data1/${id}`,
        {
          method: "DELETE",
        }
      )
      .then((res) => {
        console.log(res);
        showAlert("Data deleted successfully", 0);
        resolve();
      })
      .catch((e) => {
        console.log(e);
        reject("Something is wrong");
        showAlert("Please try again later, something is wrong", 1);
      });
  });
}
