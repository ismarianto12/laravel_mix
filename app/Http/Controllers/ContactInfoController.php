<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactInfoController extends Controller
{
    public function store(Request $request)
    {
        // Validasi data
        $validatedData = $request->validate([
            'nomer_hp' => 'required',
            'nama' => 'required',
            'tinggi_badan' => 'required',
            'berat_badan' => 'required',
        ]);

        // Simpan data ke database
        // ContactInfo::create($validatedData);

        return redirect('/contact-info');
    }
}
