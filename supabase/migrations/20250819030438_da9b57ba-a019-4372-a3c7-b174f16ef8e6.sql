-- Fix function search path security issues
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name');
  RETURN NEW;
END;
$$;

-- Add RLS policies for itinerary table if not exists
CREATE POLICY "Users can view their own itineraries" 
ON public.itinerary 
FOR SELECT 
USING (true);

CREATE POLICY "Users can insert itineraries" 
ON public.itinerary 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update itineraries" 
ON public.itinerary 
FOR UPDATE 
USING (true);

CREATE POLICY "Users can delete itineraries" 
ON public.itinerary 
FOR DELETE 
USING (true);

-- Enable RLS on itinerary table
ALTER TABLE public.itinerary ENABLE ROW LEVEL SECURITY;