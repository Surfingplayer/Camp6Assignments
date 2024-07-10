# Camp6Assignments

**Connection String**
"ConnectionStrings": {
  "ConnectionStringMVC": "Server =KEVIN_PC\\TEW_SQLEXPRESS;database=Camp5_Machine_test; Trusted_Connection=True; TrustServerCertificate=True"
}

**Accsessing the connection String**
  private readonly string connectionString;

  public StudentRepository(IConfiguration configuration)
  {
      connectionString = configuration.GetConnectionString("ConnectionStringMVC");
  }
  
public async Task<ActionResult<IEnumerable<Department>>> Name(){

}


---------------------------------------------=-------------------------
npm install ng2-search-filter ng2-datepicker --save


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';
  searchDate: string = '';
  items = [
    { name: 'Item 1', date: '2024-07-01' },
    { name: 'Item 2', date: '2024-07-02' },
    { name: 'Item 3', date: '2024-07-03' },
    // Add more items here
  ];
  filteredItems = [...this.items];

  filterItems() {
    this.filteredItems = this.items.filter(item => {
      const matchesName = item.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesDate = this.searchDate ? item.date === this.searchDate : true;
      return matchesName && matchesDate;
    });
  }
}
--------------------------------------------------------------------------------------------------
<div>
  <h1>Search Filter with Date Picker</h1>
  <input type="text" [(ngModel)]="searchText" (ngModelChange)="filterItems()" placeholder="Search by name" />
  <input type="date" [(ngModel)]="searchDate" (ngModelChange)="filterItems()" placeholder="Search by date" />
  <ul>
    <li *ngFor="let item of filteredItems">
      {{ item.name }} - {{ item.date }}
    </li>
  </ul>
</div>









-------------------------------------------

using System;
using System.IO;
using System.Collections.Generic;

namespace FileOperations
{
    class Program
    {
        static void Main(string[] args)
        {
            // Sample file path (replace with the actual file path)
            string filePath = "sample.txt";

            // Read all text from the file
            string content = File.ReadAllText(filePath);

            // Search for a word and print its occurrences
            string wordToSearch = "example"; // Replace with the actual word to search
            int occurrences = CountOccurrences(content, wordToSearch);
            Console.WriteLine($"The word '{wordToSearch}' occurs {occurrences} times.");

            // Count and print the frequency of each vowel
            Dictionary<char, int> vowelCounts = CountVowels(content);
            foreach (var kvp in vowelCounts)
            {
                Console.WriteLine($"Vowel '{kvp.Key}' occurs {kvp.Value} times.");
            }
        }

        // Function to count occurrences of a word in text
        static int CountOccurrences(string text, string word)
        {
            // Convert text and word to lower case for case-insensitive search
            text = text.ToLower();
            word = word.ToLower();

            // Split the text into words
            string[] words = text.Split(new char[] { ' ', '\t', '\n', '\r', '.', ',', ';', '!', '?' }, StringSplitOptions.RemoveEmptyEntries);

            // Count how many times the word appears in the text
            int count = 0;
            foreach (string w in words)
            {
                if (w == word)
                {
                    count++;
                }
            }

            return count;
        }

        // Function to count frequency of each vowel in text
        static Dictionary<char, int> CountVowels(string text)
        {
            // Define vowels
            char[] vowels = { 'a', 'e', 'i', 'o', 'u' };

            // Dictionary to hold the count of each vowel
            var vowelCounts = new Dictionary<char, int>();

            // Convert text to lower case for case-insensitive count
            text = text.ToLower();

            // Count each vowel in the text
            foreach (char c in text)
            {
                if (Array.Exists(vowels, v => v == c))
                {
                    if (vowelCounts.ContainsKey(c))
                    {
                        vowelCounts[c]++;
                    }
                    else
                    {
                        vowelCounts[c] = 1;
                    }
                }
            }

            return vowelCounts;
        }
    }
}

