import pdfplumber
import pandas as pd
import re

# Define the input and output file paths
input_pdf_path = "menu.pdf" # Update with your file path
output_csv_path = "Kolyba_Menu_Parsed.csv"

# Initialize list to store parsed data
parsed_data = []

# Regular expressions to match categories and items
category_pattern = re.compile(r"^[А-ЯІЇЄ\s]+$")  # Matches uppercase Ukrainian text for categories
item_pattern = re.compile(r"(.+?)\s+(\d+\/?\d* г?)\s+([\d,.]+)$")  # Matches item, portion size, and price
description_pattern = re.compile(r"\((.*?)\)")  # Matches text within parentheses (for description)

def parse_pdf(input_pdf_path):
    """Extracts and parses text from the PDF, returning structured data."""
    category = None
    with pdfplumber.open(input_pdf_path) as pdf:
        for page in pdf.pages:
            lines = page.extract_text().split("\n")
            for line in lines:
                line = line.strip()
                # Detect and set category
                if category_pattern.match(line):
                    category = line
                else:
                    # Match menu items
                    match = item_pattern.search(line)
                    if match:
                        name = match.group(1).strip()
                        portion_size = match.group(2).strip()
                        price = float(match.group(3).replace(",", "."))
                        
                        # Find description if exists
                        description = None
                        desc_match = description_pattern.search(name)
                        if desc_match:
                            description = desc_match.group(1)
                            name = name.split("(")[0].strip()

                        # Append parsed item data
                        parsed_data.append({
                            "Category": category,
                            "Name": name,
                            "Description": description,
                            "Portion Size": portion_size,
                            "Price": price
                        })
                    else:
                        # Handle multiline descriptions or any non-standard entries
                        if parsed_data and not line.isdigit():
                            parsed_data[-1]["Description"] = (parsed_data[-1].get("Description") or "") + " " + line

    return parsed_data

def export_to_csv(data, output_csv_path):
    """Exports parsed data to CSV using pandas."""
    df = pd.DataFrame(data)
    df.to_csv(output_csv_path, index=False, encoding="utf-8")
    print(f"Data successfully exported to {output_csv_path}")

# Run the parsing and export process
parsed_data = parse_pdf(input_pdf_path)
export_to_csv(parsed_data, output_csv_path)

