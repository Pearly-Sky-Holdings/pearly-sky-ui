import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../AxiosOrder";


export const saveRegulrService = createAsyncThunk('save-regular-service', async (serviceData : any, {rejectWithValue}) => {
    try {
        const {data} = await instance.post(`saveServiceDetails`, serviceData);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
});

export const saveOneTimeCleaningPage = createAsyncThunk('save-one-time-cleaning', async (serviceData : any, {rejectWithValue}) => {
    try {
        const {data} = await instance.post(`saveService`, serviceData);
        alert(JSON.stringify(data,null,2));
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
    }
});


// Generic save service function
export const saveService = createAsyncThunk(
    'save-service',
    async ({ serviceType, serviceData }: { serviceType: string; serviceData: any }, { rejectWithValue }) => {
        try {
            const { data } = await instance.post(`saveService`, { serviceType, ...serviceData });
            alert(JSON.stringify(data,null,2));
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("An unknown error occurred");
        }
    }
);

//function to call generic 
// const getServiceType = (serviceId) => {
//     switch (serviceId) {
//       case "1":
//         return "save-regular-service";
//       case "2":
//         return "save-one-time-cleaning";
//       default:
//         return "unknown-service"; // Handle unexpected service IDs
//     }
//   };
  
//   const handlePlaceOrder = async () => {
//     const serviceType = getServiceType(serviceDetails.service_id);
  
//     const data = {
//       customer: formData,
//       service_id: serviceDetails.service_id,
//       price: parseInt(serviceDetails.price),
//       date: serviceDetails.date,
//       time: serviceDetails.time,
//       property_size: serviceDetails.property_size,
//       duration: serviceDetails.duration,
//       number_of_cleaners: serviceDetails.number_of_cleaners,
//       frequency: serviceDetails.frequency,
//       package_details: serviceDetails.package_details,
//       note: serviceDetails.note,
//       language: serviceDetails.language,
//       person_type: serviceDetails.person_type,
//       Equipment: serviceDetails.Equipment,
//       cleaning_solvents: serviceDetails.cleaning_solvents,
//       business_property: serviceDetails.business_property,
//     };
  
//     setSaveLoader(true);
//     dispatch(saveService({ serviceType, serviceData: data }));
//   };
  