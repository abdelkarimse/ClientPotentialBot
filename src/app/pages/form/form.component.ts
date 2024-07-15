import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { FormService } from './form.service'; // Import the service

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [FormService]
})
export class FormulaireComponent {
  comment: string = '';

  constructor(private formService: FormService, private router: Router) {}

  onSubmit(): void {
    if (this.comment.trim()) {
      this.router.navigate(['/loading']); // Navigate to loading route
      this.formService.analyzeComment(this.comment).subscribe({
        next: (response: any) => {
          console.log('Success:', response.message);
          this.router.navigate(['/analyze'], { state: { result: response.message } }); // Navigate with result
          this.comment = ''; // Clear the textarea
        },
        error: (error) => {
          console.error('Error:', error);
          alert('An error occurred while sending the comment.');
          this.router.navigate(['/form']); // Navigate back to form route
        }
      });
    } else {
      alert('Please enter a comment before analyzing.');
    }
  }
}
