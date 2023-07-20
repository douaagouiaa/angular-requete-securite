import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import dataBase from 'C:/Users/douaa/prj/src/assets/dataBase.json';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loggedInUsername: string = '';
  loggedUrl: string='';
  loggedInRole: string = '';
  loggedInUser: any;
  chantierId: string='';
  myForm!: FormGroup;
  isModalVisible: boolean = false;
  
  constructor(private route: ActivatedRoute,private userService: UserService, private router: Router,private http: HttpClient,  private formBuilder: FormBuilder){}

  data: any;

  
  



  submitForm() {
    if (this.myForm.invalid) {
      this.isModalVisible = true; 
    } else {
      const formData = this.myForm.value;
      console.log(formData);
  
      const formDataJson = JSON.stringify(formData);
  
      localStorage.setItem('formData', formDataJson);
      
      const formDataArray = JSON.parse(localStorage.getItem('formDataArray') || '[]');
      const formDataIndex = formDataArray.findIndex((item: { id: string }) => item.id === this.chantierId);

    // Update the formData object with new data or create a new one if not found
    if (formDataIndex !== -1) {
      formDataArray[formDataIndex] = { ...formDataArray[formDataIndex], ...formData };
    } else {
      formData["id"]=this.chantierId;
      formDataArray.push(formData);
    }
      
     
  
  
      localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
      this.router.navigate(['success']);
 /* const formDataJson = JSON.stringify(formData);: This line converts the formData object into a JSON string representation using JSON.stringify(). This is useful for storing the data in a format that can be easily saved and retrieved.

localStorage.setItem('formData', formDataJson);: This line stores the JSON string representation of formData in the browser's localStorage under the key 'formData'. It saves the data locally on the user's browser for future access.

this.router.navigate(['success']);: This line navigates the user to the 'success' route using the Angular Router module. It redirects the user to a success page or component after saving the form data.

const formDataArray = JSON.parse(localStorage.getItem('formDataArray') || '[]');: This line retrieves the JSON string representation of 'formDataArray' from the localStorage and converts it back into an array of objects using JSON.parse(). If the data is not found in the localStorage, it assigns an empty array [] as the default value.

formData["id"] = this.chantierId;: This line adds an id property to the formData object, assigning the value of this.chantierId to it. This step assumes that this.chantierId holds a valid value for the form data.

formDataArray.push(formData);: This line adds the modified formData object to the formDataArray array.

localStorage.setItem('formDataArray', JSON.stringify(formDataArray));: This line converts the formDataArray array back into a JSON string and stores it in the localStorage under the key 'formDataArray'. It updates the stored array with the new form data.*/
      
      this.myForm.reset();
      console.log(formData);
    }
   



    
  }
  closeModal() {
    this.isModalVisible = false; // Close the modal message
  }
   
 
    
  
  

  ngOnInit() {
  
    this.updateLoggedInUser();
    this.chantierId = this.route.snapshot.params['id'];
    this.myForm = this.formBuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question4: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question5: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question6: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question7: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question8: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question9: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question10: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question11: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question12: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      question13: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
     }

    
    
  private updateLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedInUser'); //used to retrieve the data from the web browser's storage
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); //parse the string back to a user object
      this.loggedInUsername = parsedUser.username;
    this.loggedInRole = parsedUser.role;
    this.loggedUrl = parsedUser.url;
   
    }
  }



  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');

    }
  }
  redirectToLogin(){
    this.router.navigate(['']);
  }



 }
