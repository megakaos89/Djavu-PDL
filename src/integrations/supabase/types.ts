export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      cost_sheets: {
        Row: {
          complexity_multiplier_bed_frame: number
          complexity_multiplier_bookshelf: number
          complexity_multiplier_cabinet: number
          complexity_multiplier_coffee_table: number
          complexity_multiplier_desk: number
          complexity_multiplier_dining_table: number
          created_at: string
          id: string
          is_active: boolean
          labor_rate_per_hour: number
          name: string
          overhead_percentage: number
          profit_margin_percentage: number
          updated_at: string
        }
        Insert: {
          complexity_multiplier_bed_frame?: number
          complexity_multiplier_bookshelf?: number
          complexity_multiplier_cabinet?: number
          complexity_multiplier_coffee_table?: number
          complexity_multiplier_desk?: number
          complexity_multiplier_dining_table?: number
          created_at?: string
          id?: string
          is_active?: boolean
          labor_rate_per_hour?: number
          name?: string
          overhead_percentage?: number
          profit_margin_percentage?: number
          updated_at?: string
        }
        Update: {
          complexity_multiplier_bed_frame?: number
          complexity_multiplier_bookshelf?: number
          complexity_multiplier_cabinet?: number
          complexity_multiplier_coffee_table?: number
          complexity_multiplier_desk?: number
          complexity_multiplier_dining_table?: number
          created_at?: string
          id?: string
          is_active?: boolean
          labor_rate_per_hour?: number
          name?: string
          overhead_percentage?: number
          profit_margin_percentage?: number
          updated_at?: string
        }
        Relationships: []
      }
      extras: {
        Row: {
          base_price: number
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
        }
        Insert: {
          base_price: number
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
        }
        Update: {
          base_price?: number
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
        }
        Relationships: []
      }
      finishes: {
        Row: {
          cost_per_square_meter: number
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
        }
        Insert: {
          cost_per_square_meter: number
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
        }
        Update: {
          cost_per_square_meter?: number
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          order_id: string | null
          title: string
          type: string
          user_id: string | null
          would_send_email: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          order_id?: string | null
          title: string
          type: string
          user_id?: string | null
          would_send_email?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          order_id?: string | null
          title?: string
          type?: string
          user_id?: string | null
          would_send_email?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "notifications_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          custom_extras: string[] | null
          custom_finish_id: string | null
          custom_furniture_type:
            | Database["public"]["Enums"]["furniture_type"]
            | null
          custom_height: number | null
          custom_length: number | null
          custom_notes: string | null
          custom_width: number | null
          custom_wood_type_id: string | null
          id: string
          is_custom: boolean
          order_id: string
          product_id: string | null
          quantity: number
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          custom_extras?: string[] | null
          custom_finish_id?: string | null
          custom_furniture_type?:
            | Database["public"]["Enums"]["furniture_type"]
            | null
          custom_height?: number | null
          custom_length?: number | null
          custom_notes?: string | null
          custom_width?: number | null
          custom_wood_type_id?: string | null
          id?: string
          is_custom?: boolean
          order_id: string
          product_id?: string | null
          quantity?: number
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          custom_extras?: string[] | null
          custom_finish_id?: string | null
          custom_furniture_type?:
            | Database["public"]["Enums"]["furniture_type"]
            | null
          custom_height?: number | null
          custom_length?: number | null
          custom_notes?: string | null
          custom_width?: number | null
          custom_wood_type_id?: string | null
          id?: string
          is_custom?: boolean
          order_id?: string
          product_id?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_custom_finish_id_fkey"
            columns: ["custom_finish_id"]
            isOneToOne: false
            referencedRelation: "finishes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_custom_wood_type_id_fkey"
            columns: ["custom_wood_type_id"]
            isOneToOne: false
            referencedRelation: "wood_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          balance_paid: boolean
          balance_paid_at: string | null
          created_at: string
          deposit_amount: number
          deposit_paid: boolean
          deposit_paid_at: string | null
          estimated_delivery_date: string | null
          id: string
          notes: string | null
          order_number: string
          remaining_balance: number
          shipping_address: string | null
          shipping_city: string | null
          shipping_country: string | null
          shipping_name: string | null
          shipping_phone: string | null
          shipping_postal_code: string | null
          status: Database["public"]["Enums"]["order_status"]
          subtotal: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          balance_paid?: boolean
          balance_paid_at?: string | null
          created_at?: string
          deposit_amount?: number
          deposit_paid?: boolean
          deposit_paid_at?: string | null
          estimated_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_number: string
          remaining_balance?: number
          shipping_address?: string | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_name?: string | null
          shipping_phone?: string | null
          shipping_postal_code?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          balance_paid?: boolean
          balance_paid_at?: string | null
          created_at?: string
          deposit_amount?: number
          deposit_paid?: boolean
          deposit_paid_at?: string | null
          estimated_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          remaining_balance?: number
          shipping_address?: string | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_name?: string | null
          shipping_phone?: string | null
          shipping_postal_code?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          base_price: number
          category: Database["public"]["Enums"]["furniture_category"]
          created_at: string
          description: string | null
          dimensions_height: number | null
          dimensions_length: number | null
          dimensions_width: number | null
          finish_id: string | null
          id: string
          images: string[] | null
          is_active: boolean
          is_featured: boolean
          name: string
          stock_quantity: number
          updated_at: string
          wood_type_id: string | null
        }
        Insert: {
          base_price: number
          category: Database["public"]["Enums"]["furniture_category"]
          created_at?: string
          description?: string | null
          dimensions_height?: number | null
          dimensions_length?: number | null
          dimensions_width?: number | null
          finish_id?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          name: string
          stock_quantity?: number
          updated_at?: string
          wood_type_id?: string | null
        }
        Update: {
          base_price?: number
          category?: Database["public"]["Enums"]["furniture_category"]
          created_at?: string
          description?: string | null
          dimensions_height?: number | null
          dimensions_length?: number | null
          dimensions_width?: number | null
          finish_id?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          name?: string
          stock_quantity?: number
          updated_at?: string
          wood_type_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_finish_id_fkey"
            columns: ["finish_id"]
            isOneToOne: false
            referencedRelation: "finishes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_wood_type_id_fkey"
            columns: ["wood_type_id"]
            isOneToOne: false
            referencedRelation: "wood_types"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          postal_code: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          postal_code?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          postal_code?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      service_orders: {
        Row: {
          created_at: string
          customer_email: string | null
          customer_name: string
          customer_phone: string | null
          deposit_paid: number
          estimated_production_days: number
          id: string
          order_id: string
          production_notes: string | null
          qr_code_data: string | null
          remaining_balance: number
          service_order_number: string
          technical_specifications: Json
          total_price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customer_name: string
          customer_phone?: string | null
          deposit_paid: number
          estimated_production_days?: number
          id?: string
          order_id: string
          production_notes?: string | null
          qr_code_data?: string | null
          remaining_balance: number
          service_order_number: string
          technical_specifications?: Json
          total_price: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string | null
          deposit_paid?: number
          estimated_production_days?: number
          id?: string
          order_id?: string
          production_notes?: string | null
          qr_code_data?: string | null
          remaining_balance?: number
          service_order_number?: string
          technical_specifications?: Json
          total_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: true
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      wood_types: {
        Row: {
          cost_per_cubic_meter: number
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean
          name: string
          price_multiplier: number
        }
        Insert: {
          cost_per_cubic_meter: number
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: string
          price_multiplier?: number
        }
        Update: {
          cost_per_cubic_meter?: number
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: string
          price_multiplier?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_order_number: { Args: never; Returns: string }
      generate_service_order_number: { Args: never; Returns: string }
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "customer" | "sales_manager"
      furniture_category:
        | "tables"
        | "chairs"
        | "beds"
        | "cabinets"
        | "shelving"
        | "desks"
      furniture_type:
        | "dining_table"
        | "coffee_table"
        | "bookshelf"
        | "bed_frame"
        | "desk"
        | "cabinet"
      order_status:
        | "quote_generated"
        | "deposit_paid"
        | "in_production"
        | "manufactured"
        | "ready_for_delivery"
        | "delivered"
        | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["customer", "sales_manager"],
      furniture_category: [
        "tables",
        "chairs",
        "beds",
        "cabinets",
        "shelving",
        "desks",
      ],
      furniture_type: [
        "dining_table",
        "coffee_table",
        "bookshelf",
        "bed_frame",
        "desk",
        "cabinet",
      ],
      order_status: [
        "quote_generated",
        "deposit_paid",
        "in_production",
        "manufactured",
        "ready_for_delivery",
        "delivered",
        "cancelled",
      ],
    },
  },
} as const
