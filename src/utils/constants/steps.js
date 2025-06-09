
import { 
  MapPin, 
  Trash2, 
  Truck, 
  Shield, 
  Calendar, 
  CreditCard
} from 'lucide-react';
 export default   [
    {
      id: 'postcode',
      label: 'Postcode',
      icon: MapPin,
      description: 'Enter your location'
    },
    {
      id: 'waste-type',
      label: 'Waste Type',
      icon: Trash2,
      description: 'Select waste category'
    },
    {
      id: 'select-skip',
      label: 'Select Skip',
      icon: Truck,
      description: 'Choose skip size'
    },
    {
      id: 'permit-check',
      label: 'Permit Check',
      icon: Shield,
      description: 'Verify requirements'
    },
    {
      id: 'choose-date',
      label: 'Choose Date',
      icon: Calendar,
      description: 'Pick delivery date'
    },
    {
      id: 'payment',
      label: 'Payment',
      icon: CreditCard,
      description: 'Complete booking'
    }
  ];