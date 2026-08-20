import React from "react";
import {createClient} from "@supabase/supabase-js";
const REACT_APP_SUPABASE_URL = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const REACT_APP_SUPABASE_KEY = import.meta.env.VITE_REACT_APP_SUPABASE_KEY;


const  mysupabase = createClient (REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY);

export default mysupabase;